const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Commandes')
            .setTitle('Voici la liste des commandes :')
            .addField('**-kick** (*__Modérateur__*)', 'Kick l\'utilisateur mentionner \`-kick @Utilisateur [raison]\`')
            .addField('**-ban** (*__Modérateur__*)', 'Ban l\'utilisateur mentionner \`-ban @Utilisateur [raison]\`')
            .addField('**-mute** (*__Helper__*)', 'Mute l\'utilisateur mentionner \`-mute @Utilisateur\`')
            .addField('**-unmute** (*__Helper__*)', 'Unmute l\'utilisateur mentionner \`-unmute @Utilisateur\`')
            .addField('**-tempmute** (*__Helper__*)', 'Mute l\'utilisateur mentionner pendant une période limité \`-tempmute @Utilisateur [durée]\`')
            .addField('**-warn** (*__Helper__*)', 'Warn l\'utilisateur mentionner \`-warn @Utilisateur [raison]\`')
            .addField('**-infactions** (*__Helper__*)', 'Voir les warn de l\'utilisateur mentionner \`-infractions @Utilisateur\`')
            .addField('**-unwarn** (*__Helper__*)', 'Elever les warn de l\'utilisateur mentionner \`-unwarn @Utilisateur [numéro du warn]\`')
            .addField('**-lock** (*__Administrateur__*)', 'Verrouillez un channel \`-lock [ID channel]\`')
            .addField('**-unlock** (*__Administrateur__*)', 'Deverrouillez un channel \`-unlock [ID channel]\`')
            .addField('**-say** (*__Administrateur__*)', 'Le bot envoie un message \`-say [message]\`')
            .addField('**-userinfo** (*__Everyone__*)', 'Avoir les informations d\'un compte \`-userinfo @Utilisateur\`')
            .addField('**-serverinfo** (*__Everyone__*)', 'Avoir les informations du serveur \`-serverinfo\`')
            .setColor('RANDOM')
            .setAuthor('Nitro Desert', 'https://media.discordapp.net/attachments/440052258172960768/776894900338688091/giphy.gif')
            .setThumbnail('https://media.discordapp.net/attachments/440052258172960768/776894900338688091/giphy.gif')
            .setFooter('Copyright Nitro Desert, Tous droits réservés (2020-2020)', 'https://media.discordapp.net/attachments/440052258172960768/776894900338688091/giphy.gif')
            .setTimestamp()
            )
    },
    name: 'help'
}