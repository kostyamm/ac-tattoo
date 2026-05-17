declare module '*.css';

declare namespace React {
    namespace JSX {
        interface IntrinsicElements {
            'behold-widget': React.HTMLAttributes<HTMLElement> & { 'feed-id': string };
        }
    }
}

