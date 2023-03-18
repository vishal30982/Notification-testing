if (typeof Notification !== 'undefined') {
  if(Notification.permission == 'default') {
    Notification.requestPermission()
  }
}
setTimeout(() => {
  let title = 'The Title';
  let body = 'The body';
  let notification = new Notification(title, {body});
}, 6000);
