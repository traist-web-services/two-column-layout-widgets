module.exports = {
  construct(self, options) {
    self.pushAsset('stylesheet', 'widget', { when: 'always' })
  },
  extend: 'apostrophe-widgets',
  label: 'Two Column Layout',
  skipInitialModal: true,
  options: {
    controls: {
        position: 'top-right'
    }
  },
  addFields: [
    {
      name: 'areaLeft',
      type: 'area',
      label: 'Left Area',
      options: {
        widgets: {
          'apostrophe-images': {
            controls: {
              movable: false,
              removable: false,
              position: 'bottom-left'
            }
          },
          'apostrophe-rich-text': {
              toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink' ],
              styles: [
                { name: 'Heading', element: 'h3' },
                { name: 'Subheading', element: 'h4' },
                { name: 'Paragraph', element: 'p' }
              ],
              controls: {
                movable: false,
                removable: false,
                position: 'bottom-left'
              }
            }
          }
      }
    },
    {
      name: 'areaRight',
      type: 'area',
      label: 'Right Area',
      options: {
        widgets: {
          'apostrophe-images': {
            controls: {
              movable: false,
              removable: false,
              position: 'bottom-right'
            }
          },
          'apostrophe-rich-text': {
              toolbar: [ 'Styles', 'Bold', 'Italic', 'Link', 'Unlink' ],
              styles: [
                { name: 'Heading', element: 'h3' },
                { name: 'Subheading', element: 'h4' },
                { name: 'Paragraph', element: 'p' }
              ],
              controls: {
                movable: false,
                removable: false,
                position: 'bottom-right'
              }
            }
          }
      }
    },
    {
        type: 'range',
        name: 'colWidth',
        label: 'Column Distribution (%)',
        min: 0,
        max: 100,
        step: 5
    },
  ]
};