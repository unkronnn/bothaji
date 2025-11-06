const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_bo6wz',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔧 Mason : BO6 / Warzone - Most Affordable External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 55.750 / $3.00
**7 DAY**   — IDR 186.250 / $11.00
**30 DAY**  — IDR 389.250 / $23.00

A premium product for Call of Duty Black Ops 6 / Warzone from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** External

### 🔥**Aimbot Features:**

**Smart Aimbot System:**
• **Tab Enable** - Toggle aimbot functionality
• **Auto Switch** - Automatic target switching
• **Body Part Selection** - Choose specific aim targets
• **Aim Key** - Custom activation key binding
• **Aim Radius** - Adjustable targeting area
• **Aim Smooth** - Natural-looking aim movement

### 🔍**Visual ESP Features:**

**Player ESP:**
• **Tab Enable** - Toggle visual features
• **Show Players** - Display player positions
• **Bounding Box** - 2D square visualization
• **Snapline** - Directional lines to players
• **Distance Display** - Show exact distance measurements
• **Name Display** - Player name visibility
• **Current Weapon** - Show equipped weapons
• **Team Filtering** - Ignore friendly players

**Loot Detection:**
• **Ground Loot** - Items on the ground
• **Weapon Loot** - Firearms display
• **Cash Loot** - Money identification
• **Armor Loot** - Protection items
• **Crate Loot** - Container visualization

**Distance Management:**
• **Player Distance Limit** - Set display range for players
• **Loot Distance Limit** - Set item display distance

### ⚙️**Configuration Management:**

**Performance Optimization:**
• **Save CPU** - Resource optimization for weaker computers
• **Menu Key** - Custom menu access (default: HOME key)
• **Panic Key** - Emergency shutdown key
• **Battle Mode Key** - Toggle battle mode (disables unnecessary functions)

**Config Sharing:**
• **Load from Clipboard** - Import user settings
• **Save to Clipboard** - Export custom configurations

### 🖥️**Interface Features:**
• **Show Aim Radius** - Visual targeting area
• **Show Crosshair** - Center monitor crosshair display

### 💎**Mason Advantages:**
✅ **Most Affordable** - Lowest prices among premium providers
✅ **External Technology** - Maximum security and stability
✅ **StreamProof** - Safe for content creation
✅ **CPU Optimization** - Works on weaker computers
✅ **Essential Features** - Focus on core cheating functionality
✅ **Easy Configuration** - Simple setup and management
✅ **Battle Mode** - Streamlined combat interface
✅ **Config Sharing** - Easy settings backup and restore

### 🎮**Perfect For:**
• Budget-conscious players seeking essential features
• Users with older or weaker computers
• New players exploring Call of Duty cheats
• Streamers needing affordable StreamProof options
• Players who prefer simple, effective solutions
• Users who want essential features without complexity
• Casual players seeking slight competitive advantage

### ⚔️**Call of Duty Support:**
• **Black Ops 6** - Latest BO6 gameplay
• **Warzone Integration** - Battle Royale support
• **Steam Compatibility** - Dedicated Steam client support
• **Modern Combat** - Current COD game mechanics

### 🔧**Simplicity Benefits:**
• **Easy Setup** - Quick installation process
• **Intuitive Interface** - User-friendly controls
• **Resource Efficient** - Low system requirements
• **Stable Performance** - Reliable operation
• **Quick Learning Curve** - Easy to master

### 💰**Budget Excellence:**
• **Lowest Entry Cost** - Most affordable premium option
• **Excellent Value** - Quality features at budget prices
• **Risk-Free Trial** - Low-cost 1-day testing
• **Flexible Options** - Multiple duration choices
• **No Hidden Fees** - Transparent pricing

### 🛡️**Safety Features:**
• **External Security** - Reduced detection risk
• **StreamProof** - Safe for broadcasting
• **Panic Function** - Quick emergency shutdown
• **Battle Mode** - Streamlined combat safety

---
**Most affordable external cheat with essential Call of Duty features!**`)
            .addFields(
                {
                    name: '`🔧` MOST AFFORDABLE',
                    value: 'Lowest prices among premium providers with quality features.'
                },
                {
                    name: '`⚙️` CPU OPTIMIZED',
                    value: 'Resource-efficient design works on weaker computers.'
                },
                {
                    name: '`🎯` ESSENTIAL FEATURES',
                    value: 'Focus on core cheating functionality without complexity.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason BO6/WZ premium cheat.'
                }
            )
            .setColor('#32CD32')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason BO6/WZ • External • Most Affordable • CPU Optimized',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};