
const settings = {
  default: {
    themeColor: 'dark',
    cardStyle: 'images',
    chipSize: 'medium',
    builderOrientation: 'right',
    cascadeUpgradeSelection: 'yes',
    showStormTide:false
  },
  list: [
    {
      key: 'themeColor',
      name: 'Theme',
      values: [
        { key: 'dark', name: 'Dark Side' },
        { key: 'light', name: 'Light Side'},
        { key: 'blue', name: 'Fifth Trooper' }
      ]
    },
    {
      key: 'cardStyle',
      name: 'Card Style',
      values: [
        { key: 'images', name: 'Images' },
        { key: 'text', name: 'Text' }
      ]
    },
    {
      key: 'chipSize',
      name: 'Chip Size',
      values: [
        { key: 'small', name: 'Small' },
        { key: 'medium', name: 'Large' }
      ]
    },
    {
      key: 'cascadeUpgradeSelection',
      name: 'Cascade Upgrade Selection',
      values: [
        { key: 'yes', name: 'Yes' },
        { key: 'no', name: 'No' }
      ]
    },
    {
      key: 'showStormTide',
      name: 'Show Storm Tide Options',
      values: [
        { key: true, name: 'Yes' },
        { key: false, name: 'No' }
      ]
    }
  ]
}

export default settings;
