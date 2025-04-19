export function Button({ children, ...props }) {
  return <button {...props} className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'>{children}</button>;
}