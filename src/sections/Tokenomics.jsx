import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

ChartJS.register(ArcElement, Tooltip, Legend);
function Tokenomics() {
  useEffect(() => {
    AOS.init();
  }, [])
    const data = {
        labels: ['TEAM', 'CHARITY', 'PRIVATE', 'PRESALE'],
        datasets: [
          {
            label: 'Percent',
            data: [10, 10, 20, 60],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const options = {
        plugins: {
          legend: {
            labels: {
              color: 'white' // Customize the label text color here
            }
          }
        }
      };

    return(
        <div className="relative">
            <div className="h-20"></div>
            <div className="max-w-[1080px] w-full mx-auto">
                <div className="flex flex-col self-center">
                    <div className="pt-4 pb-10 text-3xl sm:text-6xl font-primary text-white text-center tracking-widest" data-aos="zoom-out" data-aos-duration="1000">
                        MARTIAN TOKENOMICS
                    </div>
                    <div className="mx-auto w-[300px] h-[300px] sm:w-[600px] sm:h-[600px]" data-aos="zoom-out" data-aos-duration="1000">
                        <Doughnut data={data} options={options} />
                    </div>
                </div>
                <div className="absolute left-[-300px] top-[100px] lg:top-[50px] w-[409px] h-[200px] sm:h-[509px] z-2 0 bg-[#710880] blur-[200px] sm:blur-[151px]"></div>
            </div>
            <div className="h-20"></div>
        </div>
    )
}




export default Tokenomics;

