"use client";
import React ,{useState} from 'react';

interface FormProps {
  showForm: boolean,
  onClose: () => void,
};

interface formData {
    name: string,
    class: number,
    phonenumber: number,
    queries: string,
};

const Form: React.FC<FormProps> = ({showForm, onClose}) => {
    const [formData, setFormData]= useState<formData>({name: "", class: 0 ,phonenumber: 0, queries: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();
    // Logic to send form data via email
    console.log('Form submitted:', formData);
  
    };
      
    
    return showForm ? (
        <div>
          
          {showForm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 text-white">
                <div className="popup-form">
                <button type="button" onClick={onClose} >Close</button>
                  <form onSubmit={handleSubmit} className='flex flex-col mt-5 '>
                    <label className='flex flex-col mb-5'>
                      Name:
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>
                    <label className='flex flex-col mb-5'>
                      Class:
                      <input type="number" name="class" value={formData.class} onChange={handleChange} required />
                    </label>
                    <label className='flex flex-col mb-5'>
                      Phone Number:
                      <input type="number" name="phonenumber" value={formData.phonenumber} onChange={handleChange} required />
                    </label>
                    <label className='flex flex-col mb-5'>
                      Query (if any):
                      <textarea name="queries" value={formData.queries} onChange={handleChange} />
                    </label>
                    <button type="submit">Submit</button>
                  </form>
                </div>
            </div>
            
          )}
        </div>
      ) : null ;
}
export default Form;