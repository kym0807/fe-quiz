'use client';

import StarterKit from '@tiptap/starter-kit';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Table from '@tiptap/extension-table';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import FontFamily from '@tiptap/extension-font-family';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import ImageResize from 'tiptap-extension-resize-image';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import CodeBlock from '@tiptap/extension-code-block';
import { useEditor, EditorContent } from '@tiptap/react';
import { useEditorStore } from '@/hooks/use-editor-store';
import { FontSizeExtension } from '@/extensions/font-size';
import { LineHeightExtension } from '@/extensions/line-height';

export const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    autofocus: true,
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding-left: 56px; padding-right: 56px;`,
        class:
          'focus:outline-none print:border-0 dark:bg-black dark:border-[#383838] bg-white border border-[#C7C7C7] flex flex-col h-full w-[816px] pt-10 pr-14 pb-10 cursor-text',
      },
      handleDOMEvents: {
        keydown: (view, event) => {
          if (event.key === 'Tab') {
            event.preventDefault();

            const { state } = view;
            const { tr } = state;
            tr.insertText('  ');
            view.dispatch(tr);

            return true;
          }
          return false;
        },
      },
    },
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      LineHeightExtension,
      FontSizeExtension,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
      }),
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      FontFamily,
      TextStyle,
      Underline,
      Image,
      ImageResize,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
      CodeBlock,
    ],
  });

  return (
    <div className="sticky right-4 top-10 h-[90vh] w-full overflow-scroll overflow-x-auto bg-[#f9fbfd] px-4 dark:bg-[#121212] max-sm:hidden print:overflow-visible print:bg-white print:p-0">
      <div className="mx-auto flex h-full w-[816px] min-w-max justify-center py-4 print:w-full print:min-w-0 print:py-0">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
