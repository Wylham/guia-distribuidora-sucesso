// api/server.js
import express from "express";
import cors from "cors";
import "dotenv/config"; // lê o .env

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // URL do seu Vite em dev
  })
);
app.use(express.json());

// Rota que cria a cobrança na AbacatePay e devolve a URL do checkout
app.post("/checkout/abacatepay", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.abacatepay.com/v1/billing/create",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.ABACATEPAY_API_KEY}`,
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          frequency: "ONE_TIME",
          methods: ["PIX"],
          products: [
            {
              externalId: "EBOOK-GUIA-DISTRIBUIDORA",
              name: "Guia da Distribuidora de Sucesso",
              quantity: 1,
              price: 5700, // em centavos = R$ 57,00 (ajusta se quiser outro valor)
            },
          ],
          returnUrl: "http://localhost:5173", // se o cara voltar
          completionUrl: "http://localhost:5173/obrigado", // página de sucesso (cria depois se quiser)
          // opcional: você pode mandar dados do cliente aqui se tiver um form
          // customer: {
          //   name: "Cliente",
          //   email: "[email protected]",
          // },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro da API AbacatePay:", data);
      return res
        .status(500)
        .json({ error: "Erro ao criar cobrança", details: data });
    }

    // pela doc, data.url vem dentro de data.data.url
    const url = data?.data?.url;

    if (!url) {
      console.error("Resposta sem URL da AbacatePay:", data);
      return res
        .status(500)
        .json({ error: "Cobrança criada, mas sem URL de pagamento" });
    }

    return res.json({ url });
  } catch (err) {
    console.error("Erro geral ao falar com AbacatePay:", err);
    return res
      .status(500)
      .json({ error: "Falha ao se conectar ao gateway de pagamento" });
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`API de checkout AbacatePay rodando na porta ${PORT}`);
});
