import React from 'react';

const Questions = () => {
    return (
        <div className='ml-10'>
            <div>
                <h1 className='text-2xl font-bold mb-5'>What is the Difference between Props and State</h1>
                <table className="border-collapse border">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Prop</th>
                            <th className="border px-4 py-2">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Prop is the short form of "properties".</td>
                            <td className="border px-4 py-2">State represents the internal state of a component.</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Props passed to a component  from its parent component to child component.</td>
                            <td className="border px-4 py-2">State is managed within a component and can be changed by the component itself.</td>
                        </tr>

                        <tr>
                            <td className="border px-4 py-2">It usually used to configure a component, such as setting initial values or passing data to be displayed.</td>
                            <td className="border px-4 py-2">Used to keep track of user interactions or changes within a component.</td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <div>
                <h1 className='text-2xl font-bold mb-5 mt-5'>How does useState work?</h1>
                <h3 className='text-xl'>useState is basically a React Hook that allows user to add state to a functional component. It returns an array with two values one is the  current state and a function to update it. The Hook takes an initial state value as an parameter and returns an updated state value whenever the setter function is called.</h3>
            </div>
            <div>
                <h1 className="text-2xl font-bold mt-5 mb-5">
                what can useEffect do beside loading data in react?
                </h1>
                <h3 className="text-xl"> Beside fetching data from API or load Data from database UseEffect can do cleanup operations, add Eventlistener to a function, can interact with browser API and many more.
                </h3>
            </div>
            <div>
            <h1 className="text-2xl font-bold mt-5 mb-5">
                How does React work?
                </h1>
                <h3 className="text-xl">React is a Javascript library, it is a component base system, it defined the UI component as it's Element and create Virtual DOM. This Virtual DOM is very light weight. React use Hook which are functions that let user use state and other React features in functional components. This makes it easier to write reusable, modular code and reduces the complexity of components.</h3>
            </div>
        </div>
    );
};

export default Questions;