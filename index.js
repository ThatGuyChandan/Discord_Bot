import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("interactionCreate", async (interaction) => {
  //   console.log(interaction);
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  message.reply("hey user");
});

client.login(process.env.D_TOKEN);
