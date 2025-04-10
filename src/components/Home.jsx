import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';

function Home() {
  const [title, setTitle] = useState('');
  const [values, setValues] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();

  const pasteId = searchParam.get('pasteId');
  const dispatch = useDispatch();

  function createPaste() {
    const paste = {
      title,
      content: values,
      id: pasteId || Date.now(),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPaste(paste));
    } else {
      dispatch(addToPaste(paste));
    }

    setTitle('');
    setValues('');
    setSearchParam({});
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl space-y-8">
        {/* Title + Button */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the Title"
            className="flex-grow border border-gray-600 rounded-lg p-3 bg-slate-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />
          <button
            onClick={createPaste}
            className="bg-blue-600 hover:bg-blue-700 font-semibold rounded-lg px-6 py-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
          >
            {pasteId ? 'Update My Paste' : 'Create My Paste'}
          </button>
        </div>

        {/* Paste Area */}
        <div>
          <textarea
            placeholder="Enter the Paste Here..."
            value={values}
            onChange={(e) => setValues(e.target.value)}
            className="w-full min-h-[400px] border border-gray-600 rounded-lg p-4 bg-slate-800 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
