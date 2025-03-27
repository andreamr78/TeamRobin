import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import '../assets/styles/login.css'
import Auth from '../utils/auth';
import type { User } from '../models/User.js';
import { LOGIN_USER } from '../utils/mutations.js'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = ({}: { handleModalClose: () => void }) => {
  const [userFormData, setUserFormData] = useState<User>({ email: '', password: '', savedDestinations: [] }); 
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate(); // Add navigate hook

  const [loginUserMutation] = useMutation(LOGIN_USER); 

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value }); 
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

    try {
      const { data } = await loginUserMutation({
        variables: { ...userFormData }, // Pass form data to the mutation
      });

      if (!data?.login.token) {
        throw new Error('Failed to receive token');
      }

      console.log('Login successful:', data); // Log success
      Auth.login(data.login.token); // Save token and log in
      navigate('/home'); // Redirect to homepage
    } catch (err) {
      console.error('Error during login:', err); // Log errors
      setShowAlert(true); // Show alert on error
    }

    setUserFormData({
      email: '',
      password: '',
      savedDestinations: [],
    });
  };

  return (
    <div >
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email'
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
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
            Log in
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;