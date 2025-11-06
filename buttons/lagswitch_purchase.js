const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'lagswitch_purchase',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ LagSwitch - Pricing & Purchase Details')
            .setDescription(`
### 🧾**Pricing Options**

**1 DAY**  — IDR 93.500 / $5.09
**7 DAY**  — IDR 187.500 / $10.50
**30 DAY** — IDR 446.250 / $25.50
**1 YEAR** — IDR 1.470.250 / $87.00

### 🎮**Key Features:**

#### **Core Functionality:**
- **Enable Desync** — Toggle lag on/off
- **Custom Keybind** — Choose your activation key
- **Sounds** — Audio feedback when lag toggles

#### **Lag Methods:**
- **Temporary** — Auto-disable after set time
- **Pressing** — Toggle with each keypress
- **Hold** — Active while key is held down

#### **Traffic Control:**
- **Outbound** — Block data sent to server
- **Inbound** — Block data received from server
- **UDP/TCP** — Protocol selection

#### **Advanced Settings:**
- **DurationMs** — How long each lag lasts (1000ms = 1 second)
- **DelayAfterMs** — Wait time between lag activations
- **KickBypass** — Avoid server kicks for excessive lag
- **Randomizer** — Add random delay for natural appearance
- **AutoRecovery** — Prevent program freezing
- **Fake Lag** — Simulate high ping spikes

#### **Fake Lag Modes:**
- **Infinite** — Works until manually turned off
- **Timed** — Activates for set duration
- **Hotkey** — Quick toggle during gameplay

### 🔧**Technical Specifications:**
- **Software Type:** External
- **Detection Status:** Undetected & Private
- **Build Type:** Unique build for every user
- **Update Status:** Regular updates included

### ⚠️**IMPORTANT:**
**No bans. No kicks. No limits.** Works in ALL online games including Valorant, Rust, CS2, Fortnite, and more!

---
**Ready to dominate? Contact our staff to purchase your private LagSwitch!**`)
            .addFields(
                {
                    name: '`⚠️` SAFETY NOTICE',
                    value: 'This is a private, undetected tool. Each user receives a unique build to ensure maximum security. Results may vary by game and server.'
                },
                {
                    name: '`📞` PURCHASE INSTRUCTIONS',
                    value: 'Please create a ticket or contact our staff team to select your subscription duration and receive your private build.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Professional LagSwitch Tool • Private & Undetected',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};