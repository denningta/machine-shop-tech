import S from '@sanity/desk-tool/structure-builder';

import views from './views';

import { FaBloggerB } from 'react-icons/fa';
import { GrArticle } from 'react-icons/gr';
import { FaUserAstronaut } from 'react-icons/fa';
import { BiCategoryAlt } from 'react-icons/bi';

export default S.listItem().title('Blog').icon(FaBloggerB)
.child(
  S.list().title('Blog')
    .items([
      S.listItem().title('Posts').icon(GrArticle)
        .schemaType('post')
        .child(
          S.documentTypeList('post').title('Posts')
            .child(documentId => 
              S.document().documentId(documentId).schemaType('post')
                .views(views)  
            )
        ),
      S.listItem().title('Authors').icon(FaUserAstronaut)
        .schemaType('author')
        .child(S.documentTypeList('author')),
      S.listItem().title('Categories').icon(BiCategoryAlt)
        .schemaType('category')
        .child(S.documentTypeList('category'))
    ]),
)