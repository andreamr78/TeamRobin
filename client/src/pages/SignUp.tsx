import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import './SignUp.css';
import Auth from '../utils/auth.js';
import type { User } from '../models/User.js';
import { ADD_USER } from '../utils/mutations.js'; 
import { useNavigate } from 'react-router-dom';


const SignupForm = ({}: { handleModalClose: () => void }) => {
  const navigate = useNavigate(); // Add navigate hook
  // set initial form state
  const [userFormData, setUserFormData] = useState<User>({ username: '', email: '', password: '', savedDestinations: [] });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addUserMutation] = useMutation(ADD_USER); 

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {
      const { data } = await addUserMutation({
        variables: { input: { ...userFormData } },
      });

      if (!data?.addUser.token) {
        throw new Error('Failed to receive token');
      }

      Auth.login(data.addUser.token); // Save token to localStorage
      navigate('/home'); // Redirect to homepage
    } catch (err) {
      console.error('Error during sign-up:', err); // Log errors
      setShowAlert(true); // Show alert on error
    }
  };

  return (
    <div className='sign-up-page'>
    {/* This is needed for the validation functionality above */}
    <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='sign-up-form'>
      {/* show alert if server response is bad */}
      <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
        Something went wrong with your signup!
      </Alert>

      <Form.Group className='mb-3'>
        <Form.Label htmlFor='username'>Username</Form.Label>
        <Form.Control
          type='text'
          placeholder='Your username'
          name='username'
          onChange={handleInputChange}
          value={userFormData.username || ''}
          required
        />
        <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label htmlFor='email'>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='Your email address'
          name='email'
          onChange={handleInputChange}
          value={userFormData.email || ''}
          required
        />
        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Your password'
          name='password'
          onChange={handleInputChange}
          value={userFormData.password || ''}
          required
        />
        <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
      </Form.Group>
      <Button
        disabled={!(userFormData.username && userFormData.email && userFormData.password)}
        type='submit'
        variant='success'>
          <Link to='/home'>Submit</Link>
      </Button>
    </Form>
  </div>
  );
}

export default SignupForm;
