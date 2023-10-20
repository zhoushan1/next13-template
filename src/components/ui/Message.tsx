'use client';
import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
  useCallback,
  useRef,
} from 'react';
import ReactDOM from 'react-dom';

type MessageType = 'success' | 'error' | 'info' | 'warning';

const DEFALUT_MESSAGE_OPTION: MessageConfig = {
  type: 'info',
  duration: 5000,
};

interface MessageOption {
  message: ReactNode | string;
  type: MessageType;
  duration?: number;
  onClose?: () => void;
}

type MessageMethod = (
  content: ReactNode | string,
  option?: Partial<Omit<MessageOption, 'type'>>
) => void;

interface MessageProps {
  success: MessageMethod;
  error: MessageMethod;
  info: MessageMethod;
  warning: MessageMethod;
}

const MessageContext = React.createContext<MessageProps>({
  success: () => {},
  error: () => {},
  info: () => {},
  warning: () => {},
});

const Message = ({ message, type, onClose }: MessageOption) => {
  const renderIcon = () => {
    let icon = (
      <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500">
        <svg
          className="h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
          />
        </svg>
        <span className="sr-only">Fire icon</span>
      </div>
    );
    switch (type) {
      case 'info':
        icon = (
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 ">
            <svg
              className="h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
              />
            </svg>
            <span className="sr-only">Fire icon</span>
          </div>
        );
        break;
      case 'success':
        icon = (
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 ">
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="sr-only">Check icon</span>
          </div>
        );
        break;
      case 'error':
        icon = (
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500">
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
            </svg>
            <span className="sr-only">Error icon</span>
          </div>
        );
        break;
      case 'warning':
        icon = (
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500">
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
            </svg>
            <span className="sr-only">Warning icon</span>
          </div>
        );
        break;
      default:
        break;
    }
    return icon;
  };

  return (
    <div
      id="toast-container"
      className="fixed right-8 top-4 z-[9999] mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow"
      role="alert"
    >
      {renderIcon()}
      <div className="ml-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={() => onClose?.()}
      >
        <span className="sr-only">Close</span>
        <svg
          className="h-3 w-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

type MessageConfig = Pick<MessageOption, 'type' | 'duration'>;

export const MessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [msg, setMsg] = useState<ReactNode | string>('');
  const [messageOption, setMessageOption] = useState<MessageConfig>(
    DEFALUT_MESSAGE_OPTION
  );
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (showModal) {
      // @ts-ignore
      timerRef.current = setTimeout(() => {
        setShowModal(false);
      }, messageOption.duration);
    }
    return () => {
      clearTimeout(timerRef.current);
      timerRef.current = undefined;
    };
  }, [messageOption.duration, showModal]);

  // 对应type的方法
  const messageMethod = useCallback(
    (type: MessageType) =>
      (
        content: ReactNode | string,
        option?: Partial<Omit<MessageOption, 'type'>>
      ) => {
        setShowModal(true);
        setMsg(content);
        setMessageOption((opt) => ({ ...opt, ...option, type }));
      },
    []
  );

  return (
    <MessageContext.Provider
      value={{
        success: messageMethod('success'),
        error: messageMethod('error'),
        info: messageMethod('info'),
        warning: messageMethod('warning'),
      }}
    >
      {showModal &&
        ReactDOM.createPortal(
          <Message
            message={msg}
            type={messageOption.type}
            onClose={() => {
              setShowModal(false);
              clearTimeout(timerRef.current);
              timerRef.current = undefined;
            }}
          />,
          document.body
        )}
      {children}
    </MessageContext.Provider>
  );
};

export function useMessage() {
  return React.useContext(MessageContext);
}
