/* eslint-disable no-unused-vars */
import { Events, VoiceState } from 'discord.js'
import fs from 'fs'
import functions from '../functions.js'
import data from '../data.js'

export default {
  name: Events.VoiceStateUpdate,
  /**
   * @param {VoiceState} oldState
   * @param {VoiceState} newState
   */
  async execute (oldState, newState) {
    return null
    // if (oldState.channel?.id === '742664103063191572' || newState.channel?.id === '742664103063191572') {
    //   const beforeSize = Number(fs.readFileSync('./data/voice.txt'))
    //   let size
    //   if (oldState.channel) {
    //     size = oldState.channel.members.size
    //     functions.writeFile('./data/voice.txt', size)
    //   }
    //   if (newState.channel) {
    //     size = newState.channel.members.size
    //     functions.writeFile('./data/voice.txt', size)
    //   }

    //   if (beforeSize === 0) {
    //     const webhook = await functions.findWebhooks(data.voice, await (await newState.client.guilds.fetch('610020293208965151')).channels.fetch('742789380569301023'))
    //     await webhook.send({
    //       content: '<@&1175634788703535164>',
    //       embeds: [new MessageEmbed()
    //         .setDescription('通話が開始されました')
    //         .setAuthor({
    //           name: newState.member?.displayName || oldState.member?.displayName,
    //           iconURL: functions.avatarToURL(newState.user || oldState.user)
    //         })
    //         .setColor(data.greenColor)
    //         .setFooter({ text: (await (await newState.client.guilds.fetch('610020293208965151')).channels.fetch('742664103063191572')).name })
    //         .setTimestamp(new Date())
    //       ]
    //     })
    //   }
    // }
  }
}
