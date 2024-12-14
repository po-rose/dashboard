// 'use client';

// import React, { useRef } from 'react';
// import * as styles from './style.css';
// import { Bold, Italic, Underline } from 'lucide-react';
// import CustomSelect from '../CustomSelect';

// const RichTextEditor = ({ value, onChange, placeholder }) => {
//   const editorRef = useRef(null);

//   const handleInput = (event) => {
//     if (editorRef.current) {
//       let currentContent = editorRef.current.innerHTML;

//       // If mirror mode is on, reverse the text

//       // Split the text to handle HTML tags carefully
//       const tempDiv = document.createElement('div');
//       tempDiv.innerHTML = currentContent;

//       // Reverse only the text nodes
//       const reverseTextNodes = (node) => {
//         if (node.nodeType === Node.TEXT_NODE) {
//           node.textContent = node.textContent.split('').reverse().join('');
//         }

//         // Recursively process child nodes
//         node.childNodes.forEach(reverseTextNodes);
//       };

//       reverseTextNodes(tempDiv);
//       currentContent = tempDiv.innerHTML;

//       onChange(currentContent);
//     }
//   };

//   const applyStyle = (command) => {
//     document.execCommand(command, false, null);
//     editorRef.current.focus();
//   };

//   return (
//     <>
//       <label className={styles.labelStyle}>Description</label>
//       <div className={styles.textAreaContainer}>
//         <div
//           ref={editorRef}
//           className={styles.textArea}
//           contentEditable={true}
//           onInput={handleInput}
//           dangerouslySetInnerHTML={{ __html: value || '' }}
//           placeholder={placeholder}
//           // suppressContentEditableWarning={true}
//         />
//         <div className={styles.toolbar}>
//           <button className={styles.toolbarButton} onClick={() => applyStyle('bold')} title='Bold'>
//             <Bold />
//           </button>
//           <button
//             className={styles.toolbarButton}
//             onClick={() => applyStyle('italic')}
//             title='Italic'
//           >
//             <Italic />
//           </button>
//           <button
//             className={styles.toolbarButton}
//             onClick={() => applyStyle('underline')}
//             title='Underline'
//           >
//             <Underline />
//           </button>
//           <div style={{ width: '100px', height: '40px' }}>
//             <CustomSelect placeholder={'Size'} wrapper={false} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RichTextEditor;

import React, { useState, useCallback } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { Editor } from 'slate';
import { Bold, Italic, TextSize } from 'lucide-react'; // Lucid React Icons
import * as styles from './style.css';

const RichTextEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: '' }], // Text node must be defined
    },
  ]);

  const initialState = {
    document: { title: '', content: value },
    loading: true,
    error: null,
  };

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case 'heading':
        return <h1 {...props.attributes}>{props.children}</h1>;
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  }, []);

  const toggleMark = (editor, format) => {
    const isActive = Editor.marks(editor)?.[format];
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const applyFontSize = (size) => {
    Editor.addMark(editor, 'fontSize', size);
  };

  return (
    <div className={styles.editorContainer}>
      <label className={styles.label}>Description *</label>
      <div className={styles.editorWrapper}>
        <Slate editor={editor} value={initialState} onChange={(newValue) => setValue(newValue)}>
          <div className={styles.toolbar}>
            <button className={styles.toolbarButton} onClick={() => toggleMark(editor, 'bold')}>
              <Bold size={20} />
            </button>
            <button className={styles.toolbarButton} onClick={() => toggleMark(editor, 'italic')}>
              <Italic size={20} />
            </button>
            <div className={styles.sizeDropdown}>
              <TextSize size={20} />
              <select
                className={styles.dropdown}
                onChange={(e) => applyFontSize(e.target.value)}
                defaultValue='medium'
              >
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
              </select>
            </div>
          </div>
          <Editable
            renderElement={renderElement}
            placeholder='Enter broadcast description'
            className={styles.editableArea}
          />
        </Slate>
      </div>
    </div>
  );
};

export default RichTextEditor;
