 {
    'targets': [
        {
            'target_name': 'cRabbit', 
            'sources': [
                './module.cpp'
            ],
            'cflags!': [],
            'cflags_cc!': [],
            'conditions': [
              ['OS=="mac"', {
                'xcode_settings': {
                  'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
                }
              }]
            ],
            "include_dirs": [
                "<!(node -e \"require('nan')\")"
            ]
        }]
}
