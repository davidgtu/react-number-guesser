import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Input from './components/Input';
import MinMax from './components/MinMax';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders an Input component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input />, div);
});

it('renders a MinMax component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MinMax />, div);
});

// Add unit testing using Jest or Enzyme! I have never done unit testing with React,
// I've never been exposed to unit testing with REact, but to be added soon.

// describe('Input', () => {
//   let mountedInput;
//
//   const input = () => {
//     if (!mountedInput) {
//       mountedInput = mount(
//         <Input />
//       );
//     }
//
//     return mountedInput;
//   }
//
//   it("contains everything else that gets rendered", () => {
//     const divs = input().find("div");
//     const wrappingDivs = divs.first();
//
//     expect(wrappingDivs.children()).toEqual(input().children());
//   });
// });
