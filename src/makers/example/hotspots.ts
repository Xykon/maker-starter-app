import HotspotIcon from './icon.svg'
import { MakerHotspot } from '../hotspotMakerTypes'
import ANTENNAS from './antennas'

const ExampleHotspotBLE = {
  name: 'Pycom Helium Miner BLE',
  icon: HotspotIcon,
  onboardType: 'BLE',
  translations: {
    en: {
      internal: [
        {
          title: 'Step 1',
          body:
            'Unpack your Pycom Helium Miner and attach the WiFi and LoRa antenna.',
          button: 'Next Step',
        },
        {
          title: 'Step 2',
          body: 'Connect the Pycom Helium Miner to a power outlet.',
          button: 'Next Step',
        },
        {
          title: 'Step 3',
          body:
            'Press the button on the Pycom Helium Miner to activate pairing mode.',
          button: 'Finish',
        },
      ],
    },
  },
  antenna: {
    us: ANTENNAS.EXAMPLE_US,
    default: ANTENNAS.EXAMPLE_EU,
  },
} as MakerHotspot

export default { ExampleHotspotBLE }
