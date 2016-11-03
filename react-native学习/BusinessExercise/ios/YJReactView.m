//
//  YJReactView.m
//  BusinessExercise
//
//  Created by ddn on 16/8/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "YJReactView.h"
#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@implementation YJReactView
{
  RCTRootView *_rootView;
}
/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

- (instancetype)initWithFrame:(CGRect)frame {
  self = [super initWithFrame:frame];
  if (self) {
    NSURL *jsCodeLocation;
    
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
    
    NSDictionary *launchOptions = [[NSUserDefaults standardUserDefaults] valueForKey:@"launchOptions"];
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                        moduleName:@"BusinessExercise"
                                                 initialProperties:nil
                                                     launchOptions:launchOptions];
    rootView.backgroundColor = [UIColor whiteColor];
    [self addSubview:rootView];
    _rootView = rootView;
  }
  return self;
}

- (void)layoutSubviews {
  [super layoutSubviews];
  _rootView.frame = self.bounds;
}

@end
