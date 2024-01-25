'use client';

import { BiTimeFive } from 'react-icons/bi';
import { useEffect, useCallback, useState } from 'react';
import Image from 'next/image';

const JobDiv = () => {
  const [jobs, setJobs] = useState([]);
  const getData = useCallback(async () => {
    const res = await fetch('http://localhost:3000/api/product');
    if (!res.ok) {
      console.log('Gagal Dapat Data');
    } else {
      const response = await res.json();
      setJobs(response.data);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
      {jobs.length > 0 &&
        jobs.map((item: Data) => {
          return (
            <div
              key={item.id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4 ">
                <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white">
                  {item.title}
                </h1>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive /> {item.time}
                </span>
              </span>

              <h6 className="text-[#ccc]">{item.location}</h6>

              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {item.desc}
              </p>

              <div className="company flex items-center gap-2">
                <Image
                  src="/Images/line1.png"
                  alt="Gambar"
                  className="w-[10%]"
                  width={20}
                  height={20}
                />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {item.company}
                </span>
              </div>

              <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor ">
                Apply Now
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default JobDiv;
