// App Component - represents the whole app
App = React.createClass({
  getTasks() {
    return [
      { _id: 1, text: 'Task 1' },
      { _id: 2, text: 'Task 2' },
      { _id: 3, text: 'Task 3' }
    ]
  },

  renderTasks() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  render() {
    return(
      <div className="container">
        <header>
          <h1>ToDo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
});