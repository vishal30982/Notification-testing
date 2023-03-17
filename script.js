if (typeof Notification !== 'undefined') {
  if(Notification.permission == 'default') {
    Notification.requestPermission()
  }
}
let title = 'The Title';
let body = 'The body';
setTimeout(() => {
let notification = new Notification(title, {body});
}, 6000);
