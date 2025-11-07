const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'byster_marvelrivals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💎 Byster : Marvel Rivals - Premium External Cheat')
            .setDescription(
                `**Premium external cheat for Marvel Rivals from Byster group.**\n\n` +
                `Most comprehensive Marvel Rivals cheat with LUA scripts, skin changer, and extensive customization options.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 95.000 / $5.50\n**7 Days** - IDR 310.250 / $18.00\n**30 Days** - IDR 554.750 / $33.00\n**Lifetime** - IDR 3.781.000 / $225.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds including 25H2)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT & MBR\n**BIOS:** UEFI & Legacy\n**Type:** External Software\n**Spoofer:** Built-in'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: '• **Enable AIM** - Toggle aimbot on/off\n• **Only Body** - Body-specific targeting\n• **Psilent** - Silent aim functionality\n• **Silent AIM** - Undetectable aiming\n• **Magic Bullet** - Perfect accuracy\n• **AIM Bind** - Customizable keybind\n• **Show FOV** - Visual field of view\n• **FOV Slider** - Adjustable range\n• **Smooth Slider** - Natural movement'
                },
                {
                    name: '`👁️` COMPREHENSIVE ESP',
                    value: '• **Enable ESP** - Toggle visual assistance\n• **Hero Names** - Character identification\n• **Player Names** - User information display\n• **Box ESP** - Bounding box overlay\n• **Skeleton ESP** - Bone structure display\n• **Health Display** - Vital statistics\n• **Distance Calculations** - Range information\n• **FPS Indicator** - Performance monitoring\n• **Ultimate Bar** - Ultimate ability tracking\n• **Glow ESP** - Character highlighting'
                },
                {
                    name: '`🎨` SKIN CHANGER',
                    value: '• **Enable Skin Changer** - Character customization\n• **Skin Modification** - Visual appearance changes\n• **Character Skins** - Multiple skin options\n• **Visual Enhancement** - Custom character looks'
                },
                {
                    name: '`📜` LUA SCRIPTS',
                    value: '• **[Venom] Auto Symbiotic.lua** - Venom automation\n• **[ThePunisher] Oreshnik.lua** - Punisher script\n• **[ScarletWitch] Auto safe.lua** - Witch protection\n• **[Namor] Auto safe.lua** - Namor safety\n• **[MisterFantastic] Auto safe.lua** - Fantastic automation\n• **[LunaSnow] Auto safe.lua** - Luna script\n• **[AdamWarlock] Invisible.lua** - Warlock stealth'
                },
                {
                    name: '`⚙️` MISC FEATURES',
                    value: '• **Save/Load Configs** - Settings management\n• **Spider-Man Combo** - Special character combo\n• **Black Panther Combo** - Panther automation\n• **BunnyHop** - Movement enhancement\n• **SpinBot** - Rotation features\n• **Custom Scale** - 2K/4K monitor support\n• **Multi-Resolution** - Display compatibility'
                },
                {
                    name: '`💎` BACTER ADVANTAGES',
                    value: '• **Lifetime Access** - Permanent ownership option\n• **LUA Scripting** - Custom automation\n• **Skin Changer** - Visual customization\n• **Multi-Character** - Hero-specific features\n• **Advanced Aimbot** - Multiple aiming modes\n• **Complete ESP Suite** - Full visual system'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Byster Marvel Rivals premium cheat.'
                }
            )
            .setColor('#00CED1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Byster Marvel Rivals • External • LUA Scripts • Lifetime Available',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};