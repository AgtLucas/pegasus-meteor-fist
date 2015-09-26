Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
  });

  Meteor.startup(function() {
    // Use Meteor.startup to render the component after the page is ready
    React.render(<App />, document.getElementById('render-target'));
  });
}

Meteor.methods({
  addTask(text) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  removeTask() {
    Tasks.remove(taskId);
  },

  setChecked(taskId, setChecked) {
    Tasks.update(taskId, {$set: {checked: setChecked}});
  }

});
