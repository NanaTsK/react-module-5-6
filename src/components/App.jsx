import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      {/* <button
        style={{
          display: 'flex',
          fontSize: 22,
          color: '#010101',
        }}
      >
        BUTTON
      </button> */}

      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
