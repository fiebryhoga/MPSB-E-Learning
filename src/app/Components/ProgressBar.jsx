import React from 'react';

const ProgressBar = () => {
    return (
        <div class="w-full h-[20px] bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="h-full bg-[#99CA73] mb-6 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width : '45%'}}> 45%</div>
        </div>

    );
};

export default ProgressBar;
