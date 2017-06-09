const sentiments = {
	positive: {
    key: '1',
    value: 'Positive',
    color: '#a4c939'
  },
  negative: {
    key: '2',
    value: 'Negative',
    color: '#ff0000'
  },
  neutral: {
    key: '3',
    value: 'Neutral',
    color: '#a7a7a7'
  }
};

const channels = {
  fbPage: {
    key: '1',
    value: 'Facebook Pages',
    color: '#54aeF1'
  },
  fbUser: {
    key: '2',
    value: 'Facebook Users',
    color: '#466cb0'
  },
  forum: {
    key: '3',
    value: 'Forum',
    color: '#b49ddf'
  },
  news: {
    key: '4',
    value: 'News',
    color: '#e4cd00'
  },
  blog: {
    key: '5',
    value: 'Blog',
    color: '#97716d'
  },
  youtube: {
    key: '6',
    value: 'Youtube',
    color: '#D9797F'
  },
  qa: {
    key: '7',
    value: 'Q&A',
    color: '#ffb87b'
  },
  sns: {
    key: '8',
    value: 'Social Site',
    color: '#ff0000'
  },
  linkedin: {
    key: '9',
    value: 'Linkedin Pages',
    color: '#8d98b4'
  },
  ecommerce: {
    key: '10',
    value: 'Ecommerce Sites',
    color: '#acb88c'
  },
}

const config = {
	fontFamily: 'Lato, sans-serif',
  fontWeight: 'normal',
	titleTextColor: '#1cc5c8',
	subtitleTextColor: '#1cc5c8',
	titleFontSize: '20px',
	subtitleFontSize: '35px',
  lineColor: '#297ab8',
  lineWidth: 1,
  borderRadius: 6,
  maxPointWidth: 40,
  zoomType: 'x'
}

export {
	sentiments,
  channels,
	config,
}