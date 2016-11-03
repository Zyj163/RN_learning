//
//  YJReactView.m
//  Helloword
//
//  Created by ddn on 16/8/18.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "YJReactView.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@implementation YJReactView

- (void)awakeFromNib {
  NSURL *jsCodeLocation;
  
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"Helloword"
                                               initialProperties:nil
                                                   launchOptions:nil];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  [self addSubview:rootView];
  rootView.frame = self.bounds;
}

@end
