import { sequalize } from "./database/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequalize.sync();

    app.listen(PORT, () => {
      console.log(`\n🚀 Listening on http://127.0.0.1:${PORT}/api/v1/workouts`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
