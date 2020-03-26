import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Todos from '../components/todos/todos';
import LoginSection from '../components/login/login-section';
import { IState } from '../state/createStore';
import { ITodo } from '../models/todo';
import '../styles/app.css';
import EcLogoImage from '../components/ec-logo';

const pStyle = {
  fontSize: 'calc(5px + 3vw)',
  lineHeight: 'calc(12px + 3vw)',
  margin: '2px',
};

const IndexPage = ({ todos = [], userId = 0 }: { todos: ITodo[] | undefined, userId: number | undefined }) => {

  return (
    <Layout>
      <SEO title='Home' />

      <div style={pStyle}>
        <h1 className="mt-8 leading-normal text-4xl">A tribe of awesome people teaching EVERYBODY how to code!</h1>
      </div>

      <div className='m-10 rounded-md overflow-hidden max-w-md w-64'>
        <EcLogoImage />
      </div>

      {/* <LoginSection userId={userId} /> */}

      {/* <Todos todos={todos} /> */}


      <div className='m-10'>

        <h1 className='leading-normal'>
          Check out the EverybodyCodes Slack channel!
        </h1>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert('Jumping to slack channel!')}>
          <h3 className='m-auto'>
            Join Us In Slack!
          </h3>
        </button>

      </div>

      <div className='m-10'>

        <h1 className='leading-normal'>
          Check out the EverybodyCodes Github organization!
        </h1>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert('Jumping to our twitter account!')}>
          <h3 className='m-auto'>
            Join Us On Github!
          </h3>
        </button>

      </div>
   
      <div className='m-10'>

        <h1 className='leading-normal'>
          Have ideas for making EverybodyCodes better?!
        </h1>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert('Jumping to the github org!')}>
          <h3 className='m-auto'>
            Send Us a Tweet!
          </h3>
        </button>

      </div>



      <div className='m-10'></div>


    </Layout>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    todos: state.todosReducer.todos,
    userId: state.loginReducer.userId,
  };
};

export default connect(mapStateToProps)(IndexPage);
