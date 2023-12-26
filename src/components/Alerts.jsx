import toast, { Toaster } from 'react-hot-toast';

const Alerts = () => {
  return (
    <div>
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
        gutter={10}
        
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          'data-cy':"toast",
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          } ,
      
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            } ,
          } ,
          error: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            } ,
          } ,
        } }
      />
    </div>
  ) ;
} ;

export default Alerts;