Component({

  externalClasses: ['emoji-panel'],

  properties: {
    isShow: {
      type: Boolean,
      value: false,
    },
    height: {
      type: String,
      value: '600rpx'
    },
    backgroundColor: {
      type: String,
      value: '#f7f7f7'
    },
  },
  data: {
    closeImg: './images/down.png',
    emojiList: ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "☺", "🙂", "🤗", "🤔", "😐", "😑", "😶", "🙄", "😏", "😣", "😥", "😮", "🤐", "😯", "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓", "😔", "😕", "🙃", "🤑", "😲", "☹", "🙁", "😖", "😞", "😟", "😤", "😢", "😭", "😦", "😧", "😨", "😩", "😬", "😰", "😱", "😳", "😵", "😡", "😠", "😷", "🤒", "🤕", "🤢", "🤧", "😇", "🤠", "🤡", "🤥", "🤓", "😈", "👿", "👹", "👺", "💀", "👻", "👽", "🤖", "💩", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾"]
  },
  methods: {
    closeEmoji: function () {
      this.triggerEvent('close')
    },
    chooseEmoji: function (e) {
      var value = e.currentTarget.dataset.emoji;
      this.triggerEvent('choose', value);
    },
  }
});