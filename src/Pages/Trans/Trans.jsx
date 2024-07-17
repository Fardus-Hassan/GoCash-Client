import React from 'react';

const Trans = () => {
    return (
        <div>
            <section className="container px-4 max-w-[95%] py-10 mx-auto font-montserrat">
                <div className='text-center'>
                    <h2 className="text-lg font-medium text-gray-800">Total Transactions<span className="px-3 py-1 ml-2 text-xs text-blue-600 bg-blue-100 rounded-full">10</span></h2>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-pmColor font-bold">
                                        <tr>
                                            <th></th>
                                            <th scope="col" className="py-3.5 px-4 text-sm  text-white">
                                                <span>Name</span>
                                            </th>

                                            <th scope="col" className="px-12 py-3.5 text-sm text-white">
                                                <span>Status</span>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm text-white">

                                                <span>Number</span>
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm text-white">Email address</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm text-white">Taka</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 text-center">
                                        <tr>
                                            <td className='px-3'>1</td>
                                            <td className="px-4 py-4 text-sm font-medium text-black whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">

                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                                        <div>
                                                            <h2 className="font-medium text-black">Mia</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                    <h2 className="text-sm text-emerald-500">Active</h2>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-text-black whitespace-nowrap">01722092675</td>
                                            <td className="px-4 py-4 text-text-black whitespace-nowrap">mia@example.com</td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap">5500</td>
                                            <td className='px-3'>1</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Trans;