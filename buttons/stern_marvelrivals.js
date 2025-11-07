const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_marvelrivals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Stern : Marvel Rivals - Premium External Cheat')
            .setDescription(
                `**Premium external cheat for Marvel Rivals from Stern group.**\n\n` +
                `Comprehensive aimbot with advanced visual ESP and lifetime access option for dedicated players.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 121.750 / $6.85\n**30 Days** - IDR 487.750 / $28.52\n**Lifetime** - IDR 1.931.250 / $112.96'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT\n**BIOS:** UEFI\n**Type:** External Software\n**Client:** Steam Support\n**Spoofer:** No'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: '• **Enable Aimbot** - Toggle activation\n• **Aim Prediction** - Ballistic calculation\n• **Aim Priority** - Nearest target selection\n• **Aim Key** - Customizable trigger\n• **HitBox Selection** - Precision targeting\n• **Aim FOV Circle** - Visual field indicator\n• **Aim FOV Settings** - Range configuration\n• **Aim Smooth Settings** - Natural movement\n• **Aiming Range** - Distance limitation\n• **Aim Hotkey** - Quick activation\n• **Visible Check** - Smart targeting'
                },
                {
                    name: '`👁️` COMPREHENSIVE VISUAL ESP',
                    value: '• **Player Box** - Bounding box display\n• **Player Skeleton** - Bone structure ESP\n• **Player Head** - Head detection\n• **Player Distance** - Range information\n• **Player Name** - Identification display\n• **Player Line** - Directional indicator\n• **Player Eyes** - Eye direction tracking\n• **Health Bar** - Vital statistics\n• **Heroes Name** - Character identification\n• **Radar Display** - Mini-map awareness\n• **Kill Streak** - Performance tracking\n• **Death Streak** - Match statistics\n• **Visible Check** - Smart ESP'
                },
                {
                    name: '`📡` RADAR SYSTEM',
                    value: '• **Enable Radar** - Mini-map activation\n• **Real-time Tracking** - Live player positions\n• **Tactical Awareness** - Battlefield overview\n• **Situational Display** - Enhanced map information'
                },
                {
                    name: '`🎨` COLOR CUSTOMIZATION',
                    value: '• **Color Picker** - Full color control\n• **Customizable ESP** - Personalized visual settings\n• **Visual Themes** - Multiple color schemes\n• **Professional Interface** - Clean design'
                },
                {
                    name: '`⏰` LIFETIME ACCESS',
                    value: '• **Permanent Ownership** - One-time purchase\n• **No Renewals** - No subscription needed\n• **Continuous Updates** - Ongoing feature additions\n• **Best Long-term Value** - Cost-effective investment\n• **Premium Investment** - Dedicated players choice'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern Marvel Rivals premium cheat.'
                }
            )
            .setColor('#FF6B35')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern Marvel Rivals • External • Lifetime Available • Color Customization',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};