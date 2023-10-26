import React from "react";

const Contact = () => {
  return (
    <div className="flex md:flex-col gap-5">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/bon-nguyen/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="#535351"
          className="transition lg:hover:fill-current text-grayWhite"
        >
          <path d="M0 0v36h36V0H0Zm12 28.5H7.5V12H12v16.5ZM9.75 10.098a2.636 2.636 0 0 1-2.625-2.646A2.636 2.636 0 0 1 9.75 4.806a2.636 2.636 0 0 1 2.625 2.646 2.635 2.635 0 0 1-2.625 2.646ZM30 28.5h-4.5v-8.406c0-5.052-6-4.67-6 0V28.5H15V12h4.5v2.648c2.096-3.88 10.5-4.166 10.5 3.713V28.5Z" />
        </svg>
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/anhxknguyen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="#535351"
          className="transition lg:hover:fill-current text-grayWhite"
        >
          <path d="M0 0v36h36V0H0Zm21.801 29.385c-.609.117-.801-.257-.801-.576v-3.293c0-1.12-.393-1.849-.825-2.221 2.673-.297 5.481-1.313 5.481-5.92 0-1.311-.466-2.383-1.236-3.221.124-.303.535-1.524-.119-3.175 0 0-1.006-.323-3.296 1.23-.959-.27-1.985-.401-3.005-.407-1.02.005-2.046.136-3.005.404-2.291-1.553-3.3-1.23-3.3-1.23-.65 1.652-.24 2.872-.115 3.176-.768.84-1.236 1.91-1.236 3.221 0 4.596 2.8 5.627 5.468 5.931-.344.3-.654.828-.762 1.605-.686.306-2.421.835-3.493-.999 0 0-.634-1.152-1.84-1.238 0 0-1.17-.015-.083.731 0 0 .788.369 1.334 1.755 0 0 .694 2.142 4.032 1.416v2.233c0 .317-.194.689-.792.578C9.438 27.799 6 23.301 6 18c0-6.629 5.373-12 12-12s12 5.371 12 12c0 5.3-3.433 9.797-8.199 11.385Z" />
        </svg>
      </a>
      <a target="_blank" rel="noreferrer" href="mailto:anh.xk.nguyen@gmail.com">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          fill="#535351"
          className="transition lg:hover:fill-current text-grayWhite"
        >
          <path d="M36 36H0V0H36V36ZM28.2885 26.5005C29.2335 26.5005 30 25.7325 30 24.7875V11.2125C30 10.2675 29.2335 9.4995 28.2885 9.4995H7.7115C6.7665 9.4995 6 10.2675 6 11.2125V24.7875C6 25.7325 6.7665 26.5005 7.7115 26.5005H28.2885ZM18 20.4135L8.658 13.932L8.637 25.5H27.3225V13.932L18 20.4135ZM26.8695 10.5C24.252 12.3225 18 16.7295 18 16.7295L9.0795 10.5H26.8695Z" />
        </svg>
      </a>
    </div>
  );
};

export default Contact;
