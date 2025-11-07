const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'smg_marvelrivals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💥 SMG : Marvel Rivals - Advanced External Cheat')
            .setDescription(
                `**Advanced external cheat for Marvel Rivals from SMG group.**\n\n` +
                `Highly customizable cheat with extensive settings management and built-in spoofer protection.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 85.750 / $5.00\n**7 Days** - IDR 245.250 / $14.00\n**30 Days** - IDR 498.500 / $30.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT\n**BIOS:** UEFI\n**Type:** External Software\n**Client:** Steam\n**Spoofer:** Built-in'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: '• **Enable** - Select key activation\n• **Auto Target Switch** - Smart targeting\n• **Bot Filter** - Ignore AI enemies\n• **Visibility Check** - Line of sight targeting\n• **Aim Radius (FOV)** - Range configuration\n• **Aim Smoothness** - Natural movement\n• **Max Distance** - Range limitation\n• **Bone Selection** - Head/Shoulders/Body/Legs/Arms'
                },
                {
                    name: '`👁️` VISUAL ESP',
                    value: '• **Show Radius** - Thickness and color options\n• **Show Bones** - Customizable display\n• **Show Lines** - Directional indicators\n• **Show Crosshair** - Custom overlay\n• **Box Styles** - Normal/Corner options\n• **Visible Box** - Color customization\n• **Filled Box** - Solid color fills\n• **Name Display** - Player identification\n• **Hero Names** - Character display\n• **Skeleton ESP** - Bone structure\n• **Distance Tracking** - Range calculations'
                },
                {
                    name: '`🎨` VISUAL CUSTOMIZATION',
                    value: '• **Color Selection** - Full color control\n• **Extra Settings** - Advanced options\n• **Visibility Check** - Smart ESP filtering\n• **Health Display** - Vital statistics\n• **Max Distance** - ESP range control\n• **Professional Interface** - Clean design'
                },
                {
                    name: '`⚙️` SETTINGS MANAGEMENT',
                    value: '• **Save Settings** - Store configurations\n• **Load Settings** - Apply saved configs\n• **Reset Settings** - Default restoration\n• **Font Control** - Name, size, style\n• **Font Customization** - Personalized display\n• **Menu Key** - Customizable access\n• **Panic Key** - Emergency shutdown\n• **Quick Access** - Fast configuration'
                },
                {
                    name: '`🛡️` PROTECTION FEATURES',
                    value: '• **Built-in Spoofer** - Complete protection\n• **External Security** - Maximum stability\n• **Steam Support** - Official compatibility\n• **Professional Quality** - High-end performance\n• **Reliable Operation** - Consistent performance'
                },
                {
                    name: '`💥` SMG ADVANTAGES',
                    value: '• **Advanced Customization** - Extensive settings control\n• **Professional Interface** - Clean, user-friendly design\n• **Comprehensive Features** - Complete cheat suite\n• **Settings Management** - Full configuration control\n• **Built-in Protection** - Spoofer included\n• **Flexible Options** - Multiple customization choices'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your SMG Marvel Rivals advanced cheat.'
                }
            )
            .setColor('#DC143C')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'SMG Marvel Rivals • External • Advanced Customization • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};