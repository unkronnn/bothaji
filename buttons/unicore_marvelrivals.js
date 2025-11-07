const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'unicore_marvelrivals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Unicore : Marvel Rivals - Premium Internal Cheat')
            .setDescription(
                `**Premium internal cheat for Marvel Rivals from Unicore group.**\n\n` +
                `High-performance internal cheat with advanced triggerbot and comprehensive visual system.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**7 Days** - IDR 140.250 / $6.99\n**30 Days** - IDR 312.750 / $15.99'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT & MBR\n**BIOS:** UEFI & Legacy\n**Type:** Internal Software\n**Client:** Official Launcher & Steam\n**Spoofer:** No'
                },
                {
                    name: '`👁️` ADVANCED VISUALS',
                    value: '• **Visible Only** - Target visible enemies\n• **Offscreen Direction** - Directional indicators\n• **Max Distance** - ESP range configuration\n• **Box ESP** - Bounding boxes\n• **Name Display** - Player identification\n• **Distance Tracking** - Range calculations\n• **Snap Line** - Directional lines\n• **Skeleton ESP** - Bone structure\n• **Health Bar** - Vital statistics\n• **Ammo Display** - Ammunition tracking\n• **Ultimate Charge** - Ultimate ability status\n• **Flag ESP** - Team identification\n• **Pickup Items** - Item detection'
                },
                {
                    name: '`🔫` ADVANCED TRIGGERBOT',
                    value: '• **Global/Per Hero** - Universal or character-specific\n• **Max Distance** - Range limitation\n• **Ignore Filters** - Teammate/Cloak protection\n• **Bind Key** - Customizable activation\n• **Delay Settings** - Adjustable timing\n• **Precision Targeting** - Accurate shooting'
                },
                {
                    name: '`🎯` SOPHISTICATED AIMBOT',
                    value: '• **Global/Per Hero** - Flexible targeting modes\n• **FOV Control** - Field of view settings\n• **Show Tracer** - Bullet trajectory visualization\n• **Visible Only** - Smart targeting\n• **Max Distance** - Range limitations\n• **Ignore Settings** - Teammate protection\n• **Hitbox Selection** - Target customization\n• **Priority Type** - Target prioritization\n• **Smooth Control** - Natural aiming\n• **Kill Delay** - Timing adjustments'
                },
                {
                    name: '`🛠️` UTILITY FEATURES',
                    value: '• **Camera FOV** - Perspective control\n• **Auto Jump** - Automated movement\n• **Color Grading** - Visual enhancement\n• **Profile Changer** - Account customization\n• **Character Transparency** - Visibility options\n• **Streamproof** - Content creator safe\n• **Adjustable Configs** - Custom settings'
                },
                {
                    name: '`⭐` UNICORE ADVANTAGES',
                    value: '• **Internal Performance** - Maximum efficiency\n• **Multi-Client Support** - Official & Steam\n• **Advanced Triggerbot** - Precision targeting\n• **Comprehensive Visuals** - Complete ESP suite\n• **Hero-Specific** - Character customization\n• **Configuration System** - Advanced settings'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Unicore Marvel Rivals premium cheat.'
                }
            )
            .setColor('#FFD700')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Unicore Marvel Rivals • Internal • Advanced Triggerbot • Multi-Client',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};