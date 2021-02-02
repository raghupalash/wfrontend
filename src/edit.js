import SectionForm from './SectionForm/SectionForm';

export default function edit(e, parent) {
    console.log('reached!');
    // Render SectionForm when edit is clicked
    return (
        <SectionForm 
            dataToApp={parent.dataSectionForm} 
            wantText={true} 
            section={parent.state.sections[e.target.key]} 
            formFor='edit' 
        />
    );
    
}