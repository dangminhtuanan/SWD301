import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;
  if (mongoose.connection.readyState === 2) return;

  try {
    const connectionString =
      process.env.MONGODB_CONNECTIONSTRING ||
      process.env.MONGODB_URI ||
      "mongodb://localhost:27017/productmanager";

    console.log("ðŸ”Œ Äang káº¿t ná»‘i MongoDB...");
    console.log(
      "ðŸ“ Connection string:",
      connectionString.replace(/\/\/.*@/, "//***:***@"),
    ); // áº¨n password náº¿u cÃ³

    await mongoose.connect(connectionString);

    console.log("âœ… MongoDB Ä‘Ã£ káº¿t ná»‘i thÃ nh cÃ´ng");
    console.log("ðŸ“Š Database:", mongoose.connection.db.databaseName);
  } catch (error) {
    console.error("âŒ Lá»—i khi káº¿t ná»‘i MongoDB:", error.message);
    console.error(
      "ðŸ’¡ Kiá»ƒm tra láº¡i connection string hoáº·c Ä‘áº£m báº£o MongoDB Ä‘ang cháº¡y",
    );
    console.error("ðŸ“ Chi tiáº¿t lá»—i:", error);
    throw error;
  }
};

export default connectDB;
