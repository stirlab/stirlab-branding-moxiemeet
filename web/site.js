var config = {};

config.name = 'MoxieMeet';

config.mainSiteUrl = 'http://moxiemeet.com';
config.termsUrl = 'http://moxiemeet.com/terms';
config.privacyUrl = 'http://moxiemeet.com/privacy';
config.supportUrl = 'http://moxiemeet.com/support';
config.faqUrl = 'http://moxiemeet.com/faq';
config.techReportUrl = null;

config.twitterUsername = 'ThisOldPlant';

config.email = {};
config.email.event = {};
config.email.event.register = 'mm-event-register';
config.email.event.registerInvite = 'mm-event-register-invite';
config.email.event.registerMessage = 'mm-event-register-message';
config.email.event.facilitatorInvite = 'mm-event-facilitator-invite';

config.template = {};

module.exports.config = config;

var db = {};

db.events = [];

db.sessions = [];

var completedTasks = {
   setDisplayName: 1496442154,
   connectivityCheck: 1496442154,
   instructionalVideoShort: 1496442154,
};

db.users = [];
db.users.push({
  google_json: {
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
  emails: [
    {
      value: "stirlab@gmail.com",
    }
  ],
  id: "111617128146365317470",
  link: "https://plus.google.com/111617128146365317470",
  name: {
    familyName: "Admin",
    givenName: "Stirlab",
  },
  picture: "https://lh6.googleusercontent.com/-tppIG9gd-_c/AAAAAAAAAAI/AAAAAAAAAAk/2750f2XFJE8/photo.jpg",
  provider: "google",
  superuser: true,
  completedTasks: completedTasks,
});

db.users.push({
  google_json: {
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
  emails: [
    {
      value: "test.1.stirlab@gmail.com"
    }
  ],
  id: "111760296970576832787",
  link: "https://plus.google.com/111760296970576832787",
  name: {
    familyName: "One",
    givenName: "Stirlab"
  },
  picture: "https://lh6.googleusercontent.com/-Gr_umAFeNJc/AAAAAAAAAAI/AAAAAAAAAB0/uuptY8PreR4/photo.jpg",
  provider: "google",
  perms: {
    joinEvents: true,
    memberOnce: true,
  },
  completedTasks: completedTasks,
});

db.users.push({
  google_json: {
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
  emails: [
    {
      value: "test.2.stirlab@gmail.com"
    }
  ],
  id: "100437701065407314211",
  link: "https://plus.google.com/100437701065407314211",
  name: {
    familyName: "Two",
    givenName: "Stirlab"
  },
  picture: "https://lh4.googleusercontent.com/-f8sK7alXHFE/AAAAAAAAAAI/AAAAAAAAABw/vxFvLwtRyGY/photo.jpg",
  provider: "google",
  perms: {
    joinEvents: true,
    memberOnce: true,
  },
  completedTasks: completedTasks,
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
    id: id,
    displayName: "Test User " + num,
    emails: [{
      value: "test.user." + num + "@stirlab.net",
    }],
    picture: "https://connect.moxiemeet.com/public/img/custom/test-user-" + num + "-avatar.jpg",
    perms: {
      joinEvents: true,
      memberOnce: true,
    },
    provider: "google",
    name: {
      familyName: "User " + num,
      givenName: "Test",
    },
    google_json: {
      id: id,
      email: "test.user." + num + "@stirlab.net",
      verified_email: true,
      name: "Test User " + num,
      given_name: "Test",
      family_name: "User " + num,
      picture: "https://connect.moxiemeet.com/public/img/custom/test-user-" + num + "-avatar.jpg",
      locale: "en",
    },
    completedTasks: completedTasks,
  });
}

module.exports.db = db;
