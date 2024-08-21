import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setSortOrder } from '../../redux/gameSlice';

export const GameSorter = () => {
    const dispatch = useDispatch();
    const sortOrder = useSelector((state: RootState) => state.game.sortOrder);

    const handleSortChange = (order: 'asc' | 'desc') => {
        dispatch(setSortOrder(order));
    };

    return (
        <div className="dropdown inline-block relative mb-6">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-8 rounded inline-flex items-center border border-gray-300">
                <span className="mr-1">Short By</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 border border-slate-500">
                <li className='bg-slate-200 min-w-36'>
                    <button
                        type="button"
                        className={`block px-4 w-full py-2 text-sm ${sortOrder === 'asc' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        role="menuitem"
                        onClick={() => handleSortChange('asc')}
                    >
                        Short by A to Z
                    </button>

                </li>
                <li className='bg-slate-200 min-w-36'>
                    <button
                        type="button"
                        className={`block px-4 w-full py-2 text-sm ${sortOrder === 'desc' ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                        role="menuitem"
                        onClick={() => handleSortChange('desc')}
                    >
                        Short by Z to A
                    </button>
                </li>
            </ul>
        </div>

    );
};
