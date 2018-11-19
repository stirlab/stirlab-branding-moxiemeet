var config = {};

config.name = 'MoxieMeet';
config.domain="moxiemeet.com"

config.connectSiteUrl="https://connect.moxiemeet.com"
config.mainSiteUrl = 'https://moxiemeet.com';
config.termsUrl = 'https://moxiemeet.com/terms';
config.privacyUrl = 'https://moxiemeet.com/privacy';
config.supportUrl = 'https://moxiemeet.com/support';
config.faqUrl = 'https://moxiemeet.com/faq';
config.techReportUrl = null;

config.twitterUsername = 'ThisOldPlant';

config.email = {};
config.email.event = {};
config.email.event.register = 'mm-event-register';
config.email.event.registerInvite = 'mm-event-register-invite';
config.email.event.registerMessage = 'mm-event-register-message';
config.email.event.facilitatorInvite = 'mm-event-facilitator-invite';
config.email.templateVariables = {};
config.email.templateVariables.name = config.name;
config.email.templateVariables.domain = config.domain;
config.email.templateVariables.mainSiteUrl = config.mainSiteUrl;
config.email.templateVariables.connectSiteUrl = config.connectSiteUrl;
config.email.templateVariables.supportEmail = 'support@moxiemeet.com'
config.email.templateVariables.backgroundColor = '#FFFFFF';
config.email.templateVariables.accentColor = '#0d47a1';
config.email.templateVariables.accentColorDark = '#0b3f8e';

config.template = {};

module.exports.config = config;

var db = {};

var completedTasks = {
   setDisplayName: 1496442154,
   connectivityCheck: 1496442154,
   instructionalVideoShort: 1496442154,
};

db.users = [];
db.users.push({
  googleJson: {
    id: "111617128146365317470",
    email: "stirlab@gmail.com",
    verified_email: true,
    name: "Stirlab Admin",
    given_name: "Stirlab",
    family_name: "Admin",
    link: "https://plus.google.com/111617128146365317470",
    picture: "https://lh6.googleusercontent.com/-tppIG9gd-_c/AAAAAAAAAAI/AAAAAAAAAAk/2750f2XFJE8/photo.jpg",
    locale: "en",
  },
  displayName: "Stirlab Admin",
  email: "stirlab@gmail.com",
  googleUserId: "111617128146365317470",
  link: "https://plus.google.com/111617128146365317470",
  picture: "https://lh6.googleusercontent.com/-tppIG9gd-_c/AAAAAAAAAAI/AAAAAAAAAAk/2750f2XFJE8/photo.jpg",
  perms: {
    memberOnce: true,
  },
  superuser: true,
  completedTasks: completedTasks,
  configuration: {},
});

db.users.push({
  googleJson: {
    id: "111760296970576832787",
    email: "test.1.stirlab@gmail.com",
    verified_email: true,
    name: "Stirlab One",
    given_name: "Stirlab",
    family_name: "One",
    link: "https://plus.google.com/111760296970576832787",
    picture: "https://lh6.googleusercontent.com/-Gr_umAFeNJc/AAAAAAAAAAI/AAAAAAAAAB0/uuptY8PreR4/photo.jpg",
    locale: "en"
  },
  displayName: "Stirlab One",
  email: "test.1.stirlab@gmail.com",
  googleUserId: "111760296970576832787",
  link: "https://plus.google.com/111760296970576832787",
  picture: "https://lh6.googleusercontent.com/-Gr_umAFeNJc/AAAAAAAAAAI/AAAAAAAAAB0/uuptY8PreR4/photo.jpg",
  perms: {
    joinEvents: true,
    memberOnce: true,
  },
  completedTasks: completedTasks,
  configuration: {},
});

db.users.push({
  googleJson: {
    id: "100437701065407314211",
    email: "test.2.stirlab@gmail.com",
    verified_email: true,
    name: "Stirlab Two",
    given_name: "Stirlab",
    family_name: "Two",
    link: "https://plus.google.com/100437701065407314211",
    picture: "https://lh4.googleusercontent.com/-f8sK7alXHFE/AAAAAAAAAAI/AAAAAAAAABw/vxFvLwtRyGY/photo.jpg",
    locale: "en"
  },
  displayName: "Stirlab Two",
  email: "test.2.stirlab@gmail.com",
  googleUserId: "100437701065407314211",
  link: "https://plus.google.com/100437701065407314211",
  picture: "https://lh4.googleusercontent.com/-f8sK7alXHFE/AAAAAAAAAAI/AAAAAAAAABw/vxFvLwtRyGY/photo.jpg",
  perms: {
    joinEvents: true,
    memberOnce: true,
  },
  completedTasks: completedTasks,
  configuration: {},
});

for (var num = 0; num <= 59; num++) {
  var prefix = "10000000000000000000";
  if (num > 99) {
    prefix = "100000000000000000";
  }
  else if (num > 9) {
    prefix = "1000000000000000000";
  }
  var id = prefix + String(num);
  db.users.push({
    googleUserId: id,
    displayName: "Test User " + num,
    email: "test.user." + num + "@stirlab.net",
    picture: config.connectSiteUrl + "/public/img/custom/test-user-" + num + "-avatar.jpg",
    perms: {
      joinEvents: true,
      memberOnce: true,
    },
    googleJson: {
      id: id,
      email: "test.user." + num + "@stirlab.net",
      verified_email: true,
      name: "Test User " + num,
      given_name: "Test",
      family_name: "User " + num,
      picture: config.connectSiteUrl + "/public/img/custom/test-user-" + num + "-avatar.jpg",
      locale: "en",
    },
    completedTasks: completedTasks,
    configuration: {},
  });
}

module.exports.db = db;
