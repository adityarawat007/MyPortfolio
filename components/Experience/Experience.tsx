import type { NextComponentType } from 'next';
import { MdEmail } from 'react-icons/md';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineGithub, AiOutlineTwitter, AiFillHeart } from 'react-icons/ai';
import Link from 'next/link';

export const Experience: NextComponentType = () => (
  <div className="my-16 px-3 font-sen ctx" id="experience">
    <p className="text-3xl font-bold dark:text-white mb-8">Experience</p>
    <div className="flex flex-wrap sm:flex-nowrap	 relative border-l border-l-gray-600 px-4 py-2  border-gray-400">
      <span className="w-2 h-2 bg-gray-600 -left-1 rounded-full absolute top-1/2 -translate-y-1/2" />
      <a
        href="https://www.curateit.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 flex items-center justify-center shadow-none hover:shadow-none text-foreground"
        aria-label="curateit-logo"
      >
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="169"
      height="40"
      fill="none"
      viewBox="0 0 169 40"
    >
      <g>
        <g>
          <path
            fill="#262E30"
            fillRule="evenodd"
            d="M153.579 3.881a2.402 2.402 0 00-1.698.71 2.42 2.42 0 00-.703 1.706 2.453 2.453 0 00.711 1.77 2.31 2.31 0 001.718.728 2.27 2.27 0 001.682-.714 2.37 2.37 0 00.703-1.73 2.4 2.4 0 00-.708-1.748 2.31 2.31 0 00-1.705-.722zm-27.96 0h-4.452v6.563h-2.284v3.845h2.284v13.962h4.452V14.289h2.64v-3.845h-2.64V3.881zm-17.075 6.712a8.165 8.165 0 012.588 1.815v-1.963h4.46v17.809h-4.46v-1.882a8.674 8.674 0 01-2.613 1.79 7.286 7.286 0 01-2.843.552c-2.291 0-4.273-.892-5.945-2.675-1.673-1.783-2.509-4-2.509-6.654 0-2.754.809-5.01 2.426-6.765a7.722 7.722 0 015.899-2.633c1.03-.007 2.05.2 2.997.606zm-.179 13.667a4.584 4.584 0 001.582-1.11v.003c.922-.977 1.381-2.256 1.377-3.837 0-1.55-.457-2.805-1.372-3.765a4.643 4.643 0 00-3.494-1.44 4.48 4.48 0 00-3.428 1.465c-.915.966-1.373 2.218-1.373 3.757 0 1.538.463 2.804 1.389 3.795a4.497 4.497 0 003.423 1.49 4.565 4.565 0 001.896-.358zm-15.76-13.551a4.769 4.769 0 00-1.647 2.013V10.48h-3.817v17.807h4.421v-7.2l-.016-.868c0-2.486.236-4.156.708-5.01.472-.853 1.051-1.278 1.737-1.275.454.033.894.167 1.288.394l1.386-3.856a4.133 4.133 0 00-1.809-.457 3.967 3.967 0 00-2.25.694zM79.4 19.167c0 1.68-.091 2.777-.274 3.292a3.117 3.117 0 01-1.153 1.561c-.56.367-1.22.553-1.888.532a3.146 3.146 0 01-1.872-.55 3.03 3.03 0 01-1.098-1.516c-.227-.64-.34-1.796-.34-3.465v-8.577h-4.502v7.415c0 2.848.174 4.812.522 5.891a6.906 6.906 0 002.536 3.65c1.202.874 2.776 1.31 4.721 1.308 1.795 0 3.274-.373 4.438-1.12a6.96 6.96 0 002.64-3.215c.493-1.146.738-3.274.736-6.385v-7.543H79.4v8.722zm53.125-6.489c1.743-1.794 3.932-2.69 6.565-2.69 2.801-.017 5.078.876 6.829 2.68 1.751 1.802 2.627 4.173 2.627 7.11l-.017.852h-14.308a4.767 4.767 0 001.647 3.03c.894.747 2.039 1.12 3.433 1.12a5.905 5.905 0 004.288-1.751l3.754 1.757a8.869 8.869 0 01-3.359 2.955c-1.457.67-3.047.998-4.65.956-2.781-.005-5.047-.886-6.798-2.641-1.752-1.756-2.627-3.96-2.627-6.61 0-2.718.872-4.974 2.616-6.768zm3.532 2.137c-.598.438-1.147 1.207-1.647 2.309h9.673a4.51 4.51 0 00-1.74-2.424 5.04 5.04 0 00-3.02-.934 5.308 5.308 0 00-3.266 1.05zm19.746-4.37h-4.452V28.25h4.452V10.444zm9.57-6.564v6.563h2.644v3.845h-2.644v13.962h-4.451V14.289h-2.284v-3.845h2.284V3.881h4.451zM54.264 23.205c.992.959 2.293 1.438 3.903 1.438 1.993.002 3.544-.677 4.653-2.036l2.684 3.358c-1.826 1.853-4.236 2.779-7.23 2.779-3.12 0-5.563-.927-7.33-2.782a9.323 9.323 0 01-.953-11.869 9.27 9.27 0 013.186-2.828 10.715 10.715 0 015.163-1.245 10.45 10.45 0 014.746 1.05 8.959 8.959 0 012.374 1.738l-2.643 3.305a5.504 5.504 0 00-4.455-1.945c-1.663 0-3.01.499-4.04 1.496a5.093 5.093 0 00-1.543 3.831 4.94 4.94 0 001.485 3.71z"
            clipRule="evenodd"
          ></path>
        </g>
        <path
          fill="#105FD3"
          fillRule="evenodd"
          d="M37.936 20.335c.956.623 1.736 1.132 2.655 1.785 1.433 1.011 2.356 2.104 2.765 3.078.233.588.35 1.217.344 1.85 0 .779-.158 1.55-.462 2.266a4.285 4.285 0 01-2.325 2.392 3.082 3.082 0 01-2.619-.19 3.324 3.324 0 01-1.679-2.143c-.16-.64-.017-2.423.868-2.35.505.041.637.548.737.93.029.11.054.208.085.283.339.828 1.103.907 1.547.604.666-.453.417-1.326.247-1.643-.375-.696-1.077-1.26-2.32-1.965a11.579 11.579 0 00-1.743-.77l-.045-.017a24.83 24.83 0 00-1.119-.376l-.462-.149c-.01.627.024 1.254.098 1.876.231 1.81.946 3.373 1.354 4.264.116.253.207.452.255.588.638 1.791.747 2.836.638 3.959-.123 1.308-.77 3.445-2.75 4.366a4.963 4.963 0 01-4.335.081c-1.469-.702-1.891-1.516-2.308-2.64a4.11 4.11 0 01.199-3.368c.427-.75 1.13-1.3 1.958-1.534 1.016-.283 1.738.228 1.763.739.017.351-.442.868-.607 1.039-.395.413-.722 1.873.165 2.434.842.528 2.445-.056 2.61-1.477.185-1.578-.394-4.793-2.756-8.1a11.293 11.293 0 01-2-6.295v-.191a11.292 11.292 0 012-6.295c2.362-3.308 2.941-6.523 2.757-8.1-.166-1.421-1.772-2.005-2.611-1.477-.887.555-.568 2.021-.165 2.434.165.171.624.688.607 1.039-.025.51-.747 1.019-1.763.738a3.275 3.275 0 01-1.958-1.533 4.109 4.109 0 01-.199-3.37c.417-1.12.837-1.937 2.308-2.639a4.963 4.963 0 014.335.082c1.98.92 2.627 3.058 2.75 4.366.11 1.118 0 2.165-.638 3.959-.048.142-.145.353-.268.623-.409.899-1.113 2.446-1.34 4.229a13.945 13.945 0 00-.099 1.875l.462-.148a40.46 40.46 0 001.12-.377l.044-.017a11.569 11.569 0 001.743-.769c1.242-.699 1.945-1.263 2.32-1.965.17-.318.42-1.19-.246-1.643-.445-.303-1.21-.222-1.548.604a2.35 2.35 0 00-.085.282c-.1.383-.232.89-.737.93-.885.074-1.027-1.71-.868-2.35a3.338 3.338 0 011.679-2.142 3.084 3.084 0 012.619-.19 4.269 4.269 0 012.325 2.392c.304.716.462 1.487.462 2.266a4.9 4.9 0 01-.344 1.85c-.409.985-1.332 2.083-2.765 3.088-1.05.736-1.918 1.303-3.078 2.06l-.456.299.879.573zM27.04 26.01c.288.146.448.275.484.399a.965.965 0 01-.187.643c-3.014 5.32-9.17 8.196-15.325 7.149C6.15 33.208 1.34 28.368.322 22.432c-.099-.572-.162-1.164-.223-1.74l-.01-.088A42.9 42.9 0 000 19.762a14.73 14.73 0 013.03-8.873 14.643 14.643 0 017.762-5.226 14.597 14.597 0 019.33.55 14.66 14.66 0 017.1 6.1c.246.393.333.677.28.842-.053.166-.269.332-.658.509-2.137.965-4.177.794-6.236-.52-3.232-2.064-7.785-1.912-10.823.357-2.616 1.957-3.722 4.557-3.19 7.519.58 3.237 2.686 5.458 6.091 6.427 2.944.834 5.65.466 8.036-1.098 2.051-1.345 4.119-1.463 6.318-.34zm-11.002-3.675h.792a1.101 1.101 0 011.103 1.106 1.108 1.108 0 01-1.103 1.107h-.792a1.1 1.1 0 01-1.102-1.107 1.101 1.101 0 011.102-1.106zm.792-7.362h-.792a1.1 1.1 0 00-1.102 1.106 1.1 1.1 0 001.102 1.106h.792a1.1 1.1 0 001.103-1.106 1.108 1.108 0 00-1.103-1.106z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
      </a>
      <div className="w-full ml-2 sm:ml-4 ">
        <p className="my-0 text-foreground font-bold text-xl">
          Software engineer intern
        </p>
        <p className="my-0 text-lg font-bold">Curateit</p>
        <p className="my-0 text-sm  dark:text-gray-300 text-gray-500">
          Oct 2023 - Feb 2024
        </p>
        <ul className="work dark:text-gray-400 text-gray-600">
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tech Stack:
            </span>
            &nbsp; NextJS, Javacript, TailwindCSS, OpenAI,APIs
          </li>
          <li>
            <span className="text-foreground dark:text-gray-200 font-bold">
              Tools:
            </span>
            &nbsp; Figma, Jira, Notion
          </li>
        </ul>
      </div>
    </div>
  </div>
);
