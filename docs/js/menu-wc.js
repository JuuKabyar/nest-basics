'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-basics documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
    <button type="button"
        class="search-input-clear"
        aria-label="Clear search"
        data-search-input-clear>&times;</button>
</div>
` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="architecture.html" data-type="chapter-link">
                                        <span class="icon ion-ios-git-branch"></span>Architecture
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-f8cad23afedc9785d18760841e2a385aea0078174b2e28bc559619777823c0429f6a0056d7c7a12f8afbaff77d8d86f6cf40b14211695c10ad4eaf3796414c07"' : 'data-bs-target="#xs-controllers-links-module-AppModule-f8cad23afedc9785d18760841e2a385aea0078174b2e28bc559619777823c0429f6a0056d7c7a12f8afbaff77d8d86f6cf40b14211695c10ad4eaf3796414c07"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f8cad23afedc9785d18760841e2a385aea0078174b2e28bc559619777823c0429f6a0056d7c7a12f8afbaff77d8d86f6cf40b14211695c10ad4eaf3796414c07"' :
                                            'id="xs-controllers-links-module-AppModule-f8cad23afedc9785d18760841e2a385aea0078174b2e28bc559619777823c0429f6a0056d7c7a12f8afbaff77d8d86f6cf40b14211695c10ad4eaf3796414c07"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-f8cad23afedc9785d18760841e2a385aea0078174b2e28bc559619777823c0429f6a0056d7c7a12f8afbaff77d8d86f6cf40b14211695c10ad4eaf3796414c07"' : 'data-bs-target="#xs-injectables-links-module-AppModule-f8cad23afedc9785d18760841e2a385aea0078174b2e28bc559619777823c0429f6a0056d7c7a12f8afbaff77d8d86f6cf40b14211695c10ad4eaf3796414c07"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f8cad23afedc9785d18760841e2a385aea0078174b2e28bc559619777823c0429f6a0056d7c7a12f8afbaff77d8d86f6cf40b14211695c10ad4eaf3796414c07"' :
                                        'id="xs-injectables-links-module-AppModule-f8cad23afedc9785d18760841e2a385aea0078174b2e28bc559619777823c0429f6a0056d7c7a12f8afbaff77d8d86f6cf40b14211695c10ad4eaf3796414c07"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-26bf70588a97b90a423ab86569d54f0199e35157df1ddc2f85c0da641561359c5b12745cac8b2972cb3211168f9852b0647e8daeee791d8fa435781b516a31b2"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-26bf70588a97b90a423ab86569d54f0199e35157df1ddc2f85c0da641561359c5b12745cac8b2972cb3211168f9852b0647e8daeee791d8fa435781b516a31b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-26bf70588a97b90a423ab86569d54f0199e35157df1ddc2f85c0da641561359c5b12745cac8b2972cb3211168f9852b0647e8daeee791d8fa435781b516a31b2"' :
                                            'id="xs-controllers-links-module-AuthModule-26bf70588a97b90a423ab86569d54f0199e35157df1ddc2f85c0da641561359c5b12745cac8b2972cb3211168f9852b0647e8daeee791d8fa435781b516a31b2"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-26bf70588a97b90a423ab86569d54f0199e35157df1ddc2f85c0da641561359c5b12745cac8b2972cb3211168f9852b0647e8daeee791d8fa435781b516a31b2"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-26bf70588a97b90a423ab86569d54f0199e35157df1ddc2f85c0da641561359c5b12745cac8b2972cb3211168f9852b0647e8daeee791d8fa435781b516a31b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-26bf70588a97b90a423ab86569d54f0199e35157df1ddc2f85c0da641561359c5b12745cac8b2972cb3211168f9852b0647e8daeee791d8fa435781b516a31b2"' :
                                        'id="xs-injectables-links-module-AuthModule-26bf70588a97b90a423ab86569d54f0199e35157df1ddc2f85c0da641561359c5b12745cac8b2972cb3211168f9852b0647e8daeee791d8fa435781b516a31b2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' :
                                            'id="xs-controllers-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' :
                                        'id="xs-injectables-links-module-PostsModule-2f6b23d52e28dde00119bf77da84844dc3a426717e3e44650579591bdcc857dfb6cbef054dda71b14fa6274ee10a219fad60f3eb049639f868a4d1d8253d32d8"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-6f1d4a48d5e4eff99b72b0858481d378dbfd88aec6c838159735e8590f86dae3fdf8540703abcfdcfd340ed96728a344f9fcbebe9c56f9d3e2bb3f38c92ccc64"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-6f1d4a48d5e4eff99b72b0858481d378dbfd88aec6c838159735e8590f86dae3fdf8540703abcfdcfd340ed96728a344f9fcbebe9c56f9d3e2bb3f38c92ccc64"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-6f1d4a48d5e4eff99b72b0858481d378dbfd88aec6c838159735e8590f86dae3fdf8540703abcfdcfd340ed96728a344f9fcbebe9c56f9d3e2bb3f38c92ccc64"' :
                                            'id="xs-controllers-links-module-UsersModule-6f1d4a48d5e4eff99b72b0858481d378dbfd88aec6c838159735e8590f86dae3fdf8540703abcfdcfd340ed96728a344f9fcbebe9c56f9d3e2bb3f38c92ccc64"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-6f1d4a48d5e4eff99b72b0858481d378dbfd88aec6c838159735e8590f86dae3fdf8540703abcfdcfd340ed96728a344f9fcbebe9c56f9d3e2bb3f38c92ccc64"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-6f1d4a48d5e4eff99b72b0858481d378dbfd88aec6c838159735e8590f86dae3fdf8540703abcfdcfd340ed96728a344f9fcbebe9c56f9d3e2bb3f38c92ccc64"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-6f1d4a48d5e4eff99b72b0858481d378dbfd88aec6c838159735e8590f86dae3fdf8540703abcfdcfd340ed96728a344f9fcbebe9c56f9d3e2bb3f38c92ccc64"' :
                                        'id="xs-injectables-links-module-UsersModule-6f1d4a48d5e4eff99b72b0858481d378dbfd88aec6c838159735e8590f86dae3fdf8540703abcfdcfd340ed96728a344f9fcbebe9c56f9d3e2bb3f38c92ccc64"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserDto.html" data-type="entity-link" >GetUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDto.html" data-type="entity-link" >PatchPostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PutUserDto.html" data-type="entity-link" >PutUserDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
