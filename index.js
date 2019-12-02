const si = require('systeminformation')

class MediaCapabilities {
  constructor(opts = {}) {
    this.capabilties = {}
    this.info = {
      disk: {},
      graphics: {},
      os: {}
    }
    this.opts = opts
  }
  async diskInfo() {
    try {
      this.info.disk.size = await si.fsSize()
      return this.info.disk
    } catch (e) {
      console.error(e)
    }
  }
  async graphicsInfo() {
    try {
      this.info.graphics = await si.graphics()
      return this.info.graphics
    } catch (e) {
      console.error(e)
    }
  }
  async osInfo() {
    try {
      this.info.os = await si.osInfo()
      return this.info.os
    } catch (e) {
      console.error(e)
    }
  }
}

module.exports = MediaCapabilities
