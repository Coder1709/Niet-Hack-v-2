'use client';

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function startup() {

  

  return (
    
<div className="relative overflow-x-auto">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Startup name
            </th>
            <th scope="col" class="px-6 py-3">
                Startup Type
            </th>
            <th scope="col" class="px-6 py-3">
                Founded At
            </th>
            <th scope="col" class="px-6 py-3">
                Founder Name
            </th>
            <th scope="col" class="px-6 py-3">
                Report
            </th>
        </tr>
    </thead>
    <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Spoxtale
            </th>
            <td className="px-6 py-4">
                Social-Media Marketing
            </td>
            <td className="px-6 py-4">
                Niet
            </td>
            <td class="px-6 py-4">
                Usmaan Sir
            </td>
            <td class="px-6 py-4">
                <a href = "https://drive.google.com/file/d/1CiA1YhXVylm9CDJ1R-MMIh8dqY3cDZDj/view?usp=drive_link">Report</a>
            </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                MentorAide
            </th>
            <td className="px-6 py-4">
                ED-Tech
            </td>
            <td className="px-6 py-4">
                Noida
            </td>
            <td className="px-6 py-4">
                Love Ratan Sir
            </td>
            <td class="px-6 py-4">
                <a href = "https://drive.google.com/file/d/1CiA1YhXVylm9CDJ1R-MMIh8dqY3cDZDj/view?usp=drive_link">Report</a>
            </td>
        </tr>
        <tr className="bg-white dark:bg-gray-800">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                YourGuide
            </th>
            <td className="px-6 py-4">
                Ed-tech
            </td>
            <td className="px-6 py-4">
                Bengloru
            </td>
            <td className="px-6 py-4">
                Arpit Pathak , Transi
            </td>
            <td class="px-6 py-4">
                <a href = "https://drive.google.com/file/d/1CiA1YhXVylm9CDJ1R-MMIh8dqY3cDZDj/view?usp=drive_link">Report</a>
            </td>
        </tr>
    </tbody>
</table>
</div>

  )
}
