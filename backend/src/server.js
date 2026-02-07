import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5001;

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

// Káº¿t ná»‘i vá»›i MongoDB trÆ°á»›c khi khá»Ÿi Ä‘á»™ng server
connectDB()
  .then(() => {
    if (!process.env.VERCEL) {
      app.listen(PORT, () => {
        console.log(`ðŸš€ Server báº¯t Ä‘áº§u trÃªn cá»•ng ${PORT}`);
        console.log(`Swagger UI: http://localhost:${PORT}/swagger`);
      });
    }
  })
  .catch((error) => {
    console.error("âŒ KhÃ´ng thá»ƒ khá»Ÿi Ä‘á»™ng server:", error);
    if (!process.env.VERCEL) {
      process.exit(1);
    }
  });
